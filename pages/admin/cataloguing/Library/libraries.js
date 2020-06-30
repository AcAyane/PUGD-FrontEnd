import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import {useLazyQuery} from "@apollo/react-hooks";
import Table from "../../../../components/ui/Table/Table";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";
import {GET_LIBRARY_ALL_FIELDS} from "../../../../graphql/queries/admin/cataloguing/LibraryQuerie";
const catalogingHome = () => {
    const [Name, setName] = useState('')
    
   
    const [findLibrary, { loading, error, data }] = useLazyQuery(GET_LIBRARY_ALL_FIELDS);
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const onSearchHandler = (e) => {
        e.preventDefault();
        
               findLibrary({
            variables: {
                Name: Name,
            }
        });
        
    }
    console.log(data)
   
       
            return (

            
                <div className="row">
                {/*=== get Groups initial pages */}
                
                <div className="col s12">
                <form>
                        <span>Search library by name</span>
                        <div className="row">
                        <div className="input-field col s8">
                            <TextBox label={"Search Copies Of Document (library) by name "}
                                     type="text"
                                     onChange={event => {setName(event.target.value)}}
                                     value={Name} 
                            />
                            </div>
                            <div className="input-field col s2">
                                <br />
                            <Button
                                onClick={onSearchHandler} 
                                rounded={4}>Search</Button></div>

                            <div className="input-field col s2">
                                <br />
                            <Button
                                href="AddLibrary"
                                rounded={4}> Add</Button></div>
                         </div>
                         
                    </form>
                    
                         <Table Thead={
                            <tr>
                                {/*<!-- data table responsive icons --> */}
                                <th></th>
                                {/*<!-- data table checkbox -->*/}
                                <th></th>
                                <th>
                                    <span>Name Library</span>
                                </th>
                                <th>Address of the library</th>
                                <th>Action</th>
                                
                            </tr>
                        } Tbody={
                            <tbody>
                            {(data != null || data !== undefined) && data.libraries.map((items) => (
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a key={items.id} href={`"app-invoice-view.html"${items._id}`}>
                                            {items.Name}
                                        </a>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.Address}</span>
                                    </td>
                                    
                                    

                                    <td>
                                        <div className="invoice-action">
                                            <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                                                <i className="material-icons">remove_red_eye</i>
                                            </a>
                                            <a href="app-invoice-edit.html" className="invoice-action-edit">
                                                <i className="material-icons">edit</i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        }/>


                    

                    </div>
                </div>
        
        );
 
}

catalogingHome.Layout = AdminLayout
export default catalogingHome
