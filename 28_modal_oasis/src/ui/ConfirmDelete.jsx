import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  & h3 > span {
    font-style: italic;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  // function ConfirmDelete({ resourceName, disabled }) {
  return (
    <StyledConfirmDelete>
      <Heading as='h3'>
        Delete <span>Cabin {resourceName}</span>
      </Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation='secondary'
          disabled={disabled}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button variation='danger' disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}
ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ConfirmDelete;
