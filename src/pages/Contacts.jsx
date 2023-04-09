import Items from "../components/Items/Items";
import React from "react";
import {Container, Typography} from "@mui/material";
import Dropdown from "../components/UI/Dropdown/Dropdown";


const links = [
    {path: '/prdcts/monoblocks',
        label: 'Monoblocks',
        // exact
    },
    {path: '/prdcts/macpro',
        label: 'MacPro',
        // exact
    },
    {path: '/prdcts/macstudios',
        label: 'MacStudios',
        // exact
    },
    {path: '/prdcts/macmini',
        label: 'Macmini',
        // exact
    },
    {path: '/prdcts/displays',
        label: 'Monitors',
        // exact
    },
    {path: '/prdcts/macbooks',
        label: 'Macbooks',
        // exact
    },
]

const Contacts = () => {
    return (
        <div>
            <Typography>
                Contacts
            </Typography>
                <Container>

                    <Dropdown title='drop'
                    links={links}/>

                    {/*</Dropdown>*/}

                </Container>

        </div>
    )
}

export {Contacts};