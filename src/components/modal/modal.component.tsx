import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { ModalContainer, ModalContent } from "./modal.styles";

type ModalParams = {
  active: boolean;
  setActive: any;
  children: ReactNode;
  navigateTo?: string;
};

const Modal: FC<ModalParams> = ({
  active,
  setActive,
  children,
  navigateTo,
  ...otherProps
}) => {
  const navigate = useNavigate();

  const checkNavigation = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
    setActive(false);
  };

  return (
    <ModalContainer
      className={active ? "active" : null}
      onClick={checkNavigation}
      {...otherProps}
    >
      <ModalContent
        className={active ? "active" : null}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
