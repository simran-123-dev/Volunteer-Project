export async function loginUser(credentials) {
  return { success: true, user: { name: 'Intern User' } };
}

export async function registerUser(data) {
  return { success: true, user: { name: data.name } };
}
