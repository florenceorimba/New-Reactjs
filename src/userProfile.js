const processUserData = (userList) => {
  return userList
    .filter(user => user.isActive)
    .map(user => ({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
    }))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

export default processUserData
