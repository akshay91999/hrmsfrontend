import React from 'react'
import InnerlistDrawer from './InnerlistDrawer'
import NormallistDrawer from './NormallistDrawer'

function ListelementDrawer({click,name,icon,inner,innericon1,innername1}) {
    return (
        <>

        {/* checking whether there is a inner list  */}
            {inner
            ?
            (<InnerlistDrawer click={click} name={name} icon={icon} innericon1={innericon1} innername1={innername1}/>)
            :
            (<NormallistDrawer click={click} name={name} icon={icon}/>)
            }
        </>
    )
}

export default ListelementDrawer
