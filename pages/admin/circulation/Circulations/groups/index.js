import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import Card from '../../../../../components/ui/Card/Card'
import Grid from '../../../../../components/ui/Grid/grid';
import GridElement from '../../../../../components/ui/Grid/GridElement';
import TextBox from "../../../../../components/ui/TextBox";
import Button from "../../../../../components/ui/Button";

import {useLazyQuery} from "@apollo/react-hooks";
import {GroupsByName} from "../../../../../graphql/queries/admin/Ciruclation/groups.query";
import ResGroup from "./resGroups";

const Groups = () => {

    const nul = <span style={{color:'#d60e28'}}>No Group finder</span>;

    const [GetGroupsByName, { loading, error, data }] = useLazyQuery(GroupsByName);

    const [name, setName] = useState('');

    if (loading) {
        return <div>Loading...</div>;
    }

    if(error){
        console.log(error)
        console.log(data)
    }

    const onSearchHandler = (e) => {
        e.preventDefault();

        GetGroupsByName({
            variables: {
                name: name,
            }
        });
    }

    if(data != null){
        console.log(data.GetGroupsByName)
    }




    return <div className="container">
        <div className="row">
            <div className="col s12">
                {/*<ButtonPopUp icon={"add"} hrf={"#"}/>*/}
                <form>
                    <Card>
                        <div className="row">
                            <div className="card-header">
                                <h4 className="card-title">Group de Lecteur (Borrowers)</h4>

                            </div>
                            <p>Recherche groupe</p>
                            <Grid>
                                <GridElement s={12} style={{display:"flex"}}>
                                    <TextBox
                                        label="Nom du Group"
                                        type="text"
                                        onChange={event => {setName(event.target.value)}}
                                        value={name}
                                    />
                                    <Button
                                            onClick={onSearchHandler}
                                            rounded={4}>Search</Button>
                                    <Button href="/admin/circulation/Circulations/groups/addGroups" rounded={4}>add group</Button>
                                </GridElement>
                            </Grid>
                        </div>
                    </Card>
                </form>

                {

                    error ? nul : (data == null || undefined ) ?


                        <ResGroup/> :

                        ('')

                        // : ( <ResGroup datas={data.GetGroupsByName}/> )

                }

            </div>
        </div>
    </div>
}
Groups.Layout = AdminLayout
export default Groups