import React from 'react';

export default class Menu extends React.Component{
    constructor(){
        super();

        this.state = {
            show_page: 'users',
        }
    }

    render(){
        return(
            <nav>
                        <button
                            className='Header_Menu_button'
                            onClick={() =>  this.props.updateData('users') }>
                            Пользователи
                            
                </button>
                        <button
                            className='Header_Menu_button'
                            onClick={() =>this.props.updateData('roles')}>
                            Роли
                </button>
                        <button
                            className='Header_Menu_button'
                            onClick={() => this.props.updateData('notification')}>
                            Уведомления
                </button>
                        <button
                            className='Header_Menu_button'
                            onClick={() =>  this.props.updateData('city_list') }>
                            Список города
                </button>
                        <button
                            className='Header_Menu_button'
                            onClick={() =>  this.props.updateData('bot_management')}>
                            Управление ботом
                </button>
                
                    </nav>
        )
    }
}


