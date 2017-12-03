import React from 'react';

import { Modal, Button } from 'react-bootstrap';

const IncentiveModal = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Create an incentive for a class assignment:</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Choose a course:
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

function closeModal()
{
  unmountComponentAtNode();
}

export { IncentiveModal };
