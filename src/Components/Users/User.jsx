function User({ user }) {
  const { name, email, phone, website, address, company } = user;

  return (
    <div className="box user-box">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address.city}</p>
      <p>Company Name: {company.name}</p>
      <p>Website: {website}</p>
    </div>
  );
}
export default User;
