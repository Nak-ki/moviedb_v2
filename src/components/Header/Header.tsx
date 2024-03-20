import {NavLink} from "react-router-dom";
import {FormControlLabel, Switch} from "@mui/material";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {headerActions} from '../../store'

const Header = () => {

    const dispatch = useAppDispatch()
    const {switcher} = useAppSelector(state => state.header)
    console.log(switcher)

    const handleChange = () => {
        dispatch(headerActions.setSwitcher())
    }

    if(switcher) {
        document.body.classList.add('dark')
    }
    else {
        document.body.classList.remove('dark')
    }

    return (
        <div className={css.Header}>
            <div className={css.MovieDb}>MovieDB</div>
            <div className={css.Links}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
            </div>
            <div className={css.Switchr}>
                <FormControlLabel
                    control={<Switch onChange={handleChange}/>}
                    label="Dark mode"/>
            </div>
        </div>
    );
};

export {Header};
