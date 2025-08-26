"use client";

import { useEmailOptIn } from '@/hooks/useEmailOptIn';
import EmailOptInModal from './EmailOptInModal';

export default function EmailOptInWrapper() {
  const { showModal, onClose, onSubscribe } = useEmailOptIn();

  return (
    <EmailOptInModal
      isVisible={showModal}
      onClose={onClose}
    />
  );
}
