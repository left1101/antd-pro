export default function(initialState) {
  // const { userId, role } = initialState;
  // console.log('userId', userId, role);
  console.log('initialState', initialState);
 
  return {
    canRead: true,
    canUpdate: false,
    // canUpdate: role === 'admin',
    // canDelete: foo => {
    //   return foo.ownerId === userId;
    // },
  };
}
