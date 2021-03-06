import React from 'react';
import DropDownItem from 'components/ui/dropdown/dropdownItem';
// import Router from 'next/router' ;
// import styles from './sidebar.module.css' 

const SideBarDropDownItem = ({ active ,Label,href}) => {
  // let active = ""
  // if (typeof window != "undefined" &&  Router.pathname.toLowerCase().startsWith(props.href.toLowerCase())) {
  //   active = `${styles.sidebar_list_active}`
  //   console.log(active);

  // }
  return (
    <DropDownItem className={`${active ? "active":""}`} href={href}>
      <i className="material-icons">
        radio_button_unchecked
               </i>
      <span>
        {Label}
      </span>
    </DropDownItem>         
  )
}
export default SideBarDropDownItem