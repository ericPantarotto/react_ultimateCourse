import PropTypes from 'prop-types';
import Friend from '../components/Friend';

export function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired,
  selectedFriend: PropTypes.object,
};
