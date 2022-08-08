import React from 'react'
import InnerlistDrawer from './InnerlistDrawer'
import NormallistDrawer from './NormallistDrawer'

function ListelementDrawer({click,click1,click2,name,icon,inner,innericon1,innername1,innericon2,innername2}) {
    return (
        <>

        {/* checking whether there is a inner list  */}
            {inner
            ?
            (<InnerlistDrawer click1={click1} click2={click2} name={name} icon={icon} innericon1={innericon1} innername1={innername1} innericon2={innericon2} innername2={innername2}/>)
            :
            (<NormallistDrawer click={click} name={name} icon={icon}/>)
            }
        </>
    )
}

export default ListelementDrawer
