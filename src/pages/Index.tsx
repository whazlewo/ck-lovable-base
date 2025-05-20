import { PrimaryButton, SecondaryButton } from "@workday/canvas-kit-react-button";
import { Dialog } from "@workday/canvas-kit-react-dialog";
import { Flex } from "@workday/canvas-kit-react-layout";
import { createStyles } from "@workday/canvas-kit-styling";
import { system } from "@workday/canvas-tokens-web";
import { useState } from "react";

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

const CKTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Flex cs={parentContainerStyles}>
      <PrimaryButton onClick={handleOpen}>Save</PrimaryButton>
      <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>

      <Dialog isOpen={isOpen} onDismiss={handleClose}>
        <Dialog.Target>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Body>Are you sure you want to save your changes?</Dialog.Body>
          <Dialog.Footer>
            <Flex gap="s">
              <PrimaryButton onClick={handleClose}>Continue</PrimaryButton>
              <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
            </Flex>
          </Dialog.Footer>
        </Dialog.Target>
      </Dialog>
    </Flex>
  );
};

export default CKTest;