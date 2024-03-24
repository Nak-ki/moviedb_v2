import {FC} from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {SubmitHandler, useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {headerActions} from "../../store";
import css from './SearchForm.module.css'

interface IProps {

}

const SearchForm :FC<IProps> = () => {
    const {register, handleSubmit} = useForm<{word:string}>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const  search: SubmitHandler<{ word: string }> = (info) => {
        dispatch(headerActions.setTrigger())
        navigate(`/movies?word=${info.word}`)
    }

 return (
  <div>
   <form className={css.SForm} onSubmit={handleSubmit(search)}>
       <TextField id="standard-basic" size={"medium"} label="Enter movie/cartoon/anime/etc./ name:" variant="standard" color={"primary"} {...register('word')}/>
       <button><SearchRoundedIcon/></button>

   </form>
  </div>
 );
};

export {SearchForm};