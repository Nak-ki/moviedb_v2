import {NavLink} from "react-router-dom";
import {FormControlLabel, Switch} from "@mui/material";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {headerActions} from '../../store'
import {SearchForm} from "../SearchForm";
import {UserInfo} from "../UserInfo";

const Header = () => {

    const dispatch = useAppDispatch()
    const {switcher, trigger} = useAppSelector(state => state.header)
    console.log(switcher)

    const handleChange: () => void = () => {
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
                <NavLink to={'#'} onClick={() => dispatch(headerActions.setTrigger())}>Search</NavLink>
            </div>
            <div className={css.SearchForm}>
                {trigger && <SearchForm/>}
            </div>
            <div>
                <FormControlLabel className={css.Switch}
                    control={<Switch onChange={handleChange}/>}
                    label="Dark mode"/>
            </div>
            <div>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};
