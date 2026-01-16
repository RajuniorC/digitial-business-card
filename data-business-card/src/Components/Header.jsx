export default function Header() {
    return (
        <header>
      <img src="./src/assets/avatar.jpeg" className='profile-avatar' alt='Profile Avatar' />
      <div className='profile-info'>
      <h1>Rajunior Campbell</h1>
      <p className='job-title'>Frontend Developer</p>
    <div className='github'>
      <span className='github-icon'></span>
      <p>github.com/RajuniorC</p>
    </div>
      <div className='contact-info'>
        <a className="email" href='mailto:rajunior@example.com'><span><i class="fa-solid fa-envelope"></i></span>Email</a>
        <a className="linkedin" href='https://linkedin.com/in/rajuniorcampbell'><span><i class="fa-brands fa-linkedin"></i></span>LinkedIn</a>
      </div>
      </div>
     </header>
    )
}
