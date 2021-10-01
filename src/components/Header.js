import { auth, provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";
import styled from "styled-components";

const Header = (props) => {

    const HandleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney+ Logo" />
        </Logo>
        <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" alt="home" />
                <span>HOME</span>
            </a>
            <a href="/home">
                <img src="/images/search-icon.svg" alt="search" />
                <span>SEARCH</span>
            </a>
            <a href="/home">
                <img src="/images/watchlist-icon.svg" alt="watchlist" />
                <span>WATCHLIST</span>
            </a>
            <a href="/home">
                <img src="/images/original-icon.svg" alt="originals" />
                <span>ORIGINALS</span>
            </a>
            <a href="/home">
                <img src="/images/movie-icon.svg" alt="movies" />
                <span>MOVIES</span>
            </a>
            <a href="/home">
                <img src="/images/series-icon.svg" alt="series" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <Login onClick={HandleAuth}>Login</Login>
    </Nav>;
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100px;
    justify-content: flex-end;
    margin: 0px;
    positiion: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            line-spacing: 1.08;
            padding: 2px 0px;
            letter-spacing: 1.42px;
            font-size: 13px;
            white-space: nowrap;
            position: relative;
            color: rgb(249, 249, 249);

            &:before {
                background-color: rgb(249, 249, 249);
                content: "";
                height: 2px;
                opacity: 0;
                width: auto;
                visibility: hidden;
                border-radius: 0 0 4px 4px;
                bottom: -3px;
                left: 0px;
                right: 0px;
                position: absolute;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-origin: left center;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }

        }
    }


    // @media (max-width: 768px){
    //     display: none;
    // }
`;

const Login = styled.a`
    background-color: rbga(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 200ms ease 0s;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

export default Header;