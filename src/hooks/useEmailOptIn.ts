import { useState, useEffect } from 'react';

export function useEmailOptIn() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownFirstVisit, setHasShownFirstVisit] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed
    const subscribed = localStorage.getItem('email_subscribed');
    if (subscribed === 'true') {
      setHasSubscribed(true);
      return;
    }

    // Check if modal was shown on first visit
    const firstVisitShown = localStorage.getItem('email_modal_first_visit_shown');
    const exitIntentShown = localStorage.getItem('email_modal_exit_intent_shown');
    
    if (firstVisitShown === 'true') {
      setHasShownFirstVisit(true);
    }
    
    if (exitIntentShown === 'true') {
      setHasShownExitIntent(true);
    }

    // Show modal on first visit if not shown before
    if (!firstVisitShown && !hasSubscribed) {
      setShowModal(true);
    }
  }, [hasSubscribed]);

  // Exit intent detection
  useEffect(() => {
    if (hasSubscribed || hasShownExitIntent) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showModal && !hasShownExitIntent) {
        setShowModal(true);
        setHasShownExitIntent(true);
        localStorage.setItem('email_modal_exit_intent_shown', 'true');
      }
    };

    const handleBeforeUnload = () => {
      if (!showModal && !hasShownExitIntent) {
        setShowModal(true);
        setHasShownExitIntent(true);
        localStorage.setItem('email_modal_exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [showModal, hasShownExitIntent, hasSubscribed]);

  const handleClose = () => {
    setShowModal(false);
    
    // Mark first visit as shown if this was the first visit modal
    if (!hasShownFirstVisit) {
      setHasShownFirstVisit(true);
      localStorage.setItem('email_modal_first_visit_shown', 'true');
    }
  };

  const handleSubscribe = () => {
    setHasSubscribed(true);
    localStorage.setItem('email_subscribed', 'true');
    setShowModal(false);
  };

  const resetPreferences = () => {
    localStorage.removeItem('email_subscribed');
    localStorage.removeItem('email_modal_first_visit_shown');
    localStorage.removeItem('email_modal_exit_intent_shown');
    setHasSubscribed(false);
    setHasShownFirstVisit(false);
    setHasShownExitIntent(false);
    setShowModal(true);
  };

  return {
    showModal: showModal && !hasSubscribed,
    onClose: handleClose,
    onSubscribe: handleSubscribe,
    resetPreferences,
    hasSubscribed,
    hasShownFirstVisit,
    hasShownExitIntent
  };
}
