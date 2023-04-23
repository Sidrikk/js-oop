// BEGIN
export const getMutualFriends = (user1, user2) => {
  return user1.getFriends().filter(friend => user2.getFriends().map(friend => friend.id).includes(friend.id));
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});