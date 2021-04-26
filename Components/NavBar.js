import Link from 'next/link';

export default function Navbar(){
  return (
    <div>
      <nav>
        <Link href='/'>
          <a>
            <span>
              <h3>
                devjobs
              </h3>
            </span>
          </a>
        </Link>
          <a >
            <span>
              <h3>
                ToggleNight Mode
              </h3>
            </span>
          </a>
      </nav>
      </div>
  );
};