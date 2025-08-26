import { useState, useEffect } from 'react';

export function useEmailOptIn() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownToday, setHasShownToday] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed
    const subscribed = localStorage.getItem('email_subscribed');
    if (subscribed === 'true') {
      setHasSubscribed(true);
      return;
    }

    // Check if modal was shown today
    const lastShown = localStorage.getItem('email_modal_last_shown');
    const today = new Date().toDateString();
    
    if (lastShown === today) {
      setHasShownToday(true);
      return;
    }

    // Show modal if conditions are met
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    
    // Mark as shown today
    const today = new Date().toDateString();
    localStorage.setItem('email_modal_last_shown', today);
    setHasShownToday(true);
  };

  const handleSubscribe = () => {
    setHasSubscribed(true);
    localStorage.setItem('email_subscribed', 'true');
    setShowModal(false);
  };

  const resetPreferences = () => {
    localStorage.removeItem('email_subscribed');
    localStorage.removeItem('email_modal_last_shown');
    setHasSubscribed(false);
    setHasShownToday(false);
    setShowModal(true);
  };

  return {
    showModal: showModal && !hasShownToday && !hasSubscribed,
    onClose: handleClose,
    onSubscribe: handleSubscribe,
    resetPreferences,
    hasSubscribed,
    hasShownToday
  };
}
