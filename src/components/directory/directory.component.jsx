import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Hoodie Season',
                id: 1,
                linkURL: 'shop'
            },
            {
                title: 'Cart',
                id: 2,
                linkURL: '',
            }]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...sectionProps}) =>  (
                        <MenuItem key={id} {...sectionProps} />
                    ))
                }
             
            </div>
        )
    }
}


export default Directory;