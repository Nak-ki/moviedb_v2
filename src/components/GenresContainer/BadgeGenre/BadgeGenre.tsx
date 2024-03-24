import {NavLink} from "react-router-dom";
import { Badge } from "@mui/material";
import {FC} from "react";

import {IGenre} from "../../../interfaces";
import css from './Badge.module.css'



interface IProps {
    genre:IGenre
}

const BadgeGenre :FC<IProps> = ({genre}) => {
    const { id,name} = genre



    return (
        <div>
            <Badge className={css.Bdg} overlap={"circular"} color={"secondary"} badgeContent={
                <NavLink className={css.Link} to={`/movies?id=${id}`}>{name}</NavLink>}>
            </Badge>
        </div>
    );
};

export {BadgeGenre};


