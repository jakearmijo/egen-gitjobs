import Link from 'next/link';
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
position: relative;
margin: 35px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "Light";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 20px;
  width: 65px;
  height: 35px;
  float: right;
  flex-direction: row-reverse;
  padding: 15px 15px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "Dark";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default function Navbar({ themeToggler }){
  return (
    <div>
      <nav className='jobNavBar'>
        <Link href='/'>
          <a>
            <span>
              <h3 className='goBackTester'>
                devjobs
              </h3>
            </span>
          </a>
        </Link>
        <CheckBoxWrapper>
          <CheckBox className='toggleLightDarkTester' onClick={themeToggler} id="checkbox" type="checkbox" />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </nav>
    </div>
  );
};