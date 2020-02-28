import Link from "next/link";
import React, {Fragment} from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useRouter } from "next/router";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const NavLink = ({ path }) => {
    const router = useRouter();
    return (
        <Fragment>
            <style jsx>{`
                      .link {
                        margin-top: 5px;
                        margin-right: 50px;
                        cursor: pointer                        
                      }
                      .active {
                        pointer-events: none;
                        color: #19857b;
                        margin-top: 5px;
                        margin-right: 50px;                        
                      }
                    `}
            </style>
            <div className={router.pathname === path ? "link active" : "link"}>
                <Link href={path}><HomeIcon fontSize="large" style={{width: '60px'}}/></Link>
            </div>
        </Fragment>
    )
};

export default NavLink;