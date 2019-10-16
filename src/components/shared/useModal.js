import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState({
    depositForm: false,
    rageForm: false,
    deviceNotConnectedModal: false,
    addDeviceModa: false,
    newDeviceDetectedModal: false,
    getQrCode: false,
  });

  function toggle(modalName) {
    console.log('toggle', modalName);
    
    setIsShowing({
      ...isShowing,
      ...{ [modalName]: !isShowing[modalName] },
    });
  }

  function open(modalName) {
    setIsShowing({
      ...isShowing,
      ...{ [modalName]: true },
    });
  }

  return {
    isShowing,
    toggle,
    open,
  };
};

export default useModal;
