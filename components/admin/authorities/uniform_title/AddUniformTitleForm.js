import React from 'react';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import Button from '@/components/ui/Button';
import SimpleModal from '@/components/admin/authorities/shared/SearchAuthor'
import LinkedAuthorityListView from '@/components/admin/authorities/shared/LinkedAuthorityListView';
import useUniformTitleForm from './useUniformTitleForm';
import TextBox from '@/components/ui/TextBox';
import SelectBox from '@/components/ui/SelectBox';
import DatePicker from '@/components/ui/DatePicker/DatePicker';
import MultipleTextinputs from '@/shared/MultipleTextinputs';

const AddUniformTitleForm = () => {

    const { inputs,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        handleOpenSee,
        handleOpenBroader_term,
        handleOpenSee_Also,
        unsetBroader_term,
        unsetSee,
        open,
        onAddHandler,
        HandlePropertyChange,
        DeleteAtIndex,
        AddString } = useUniformTitleForm();
    const onSubmit = (e) => {
        e.preventDefault();
        onAddHandler()
    }
    return (
        <React.Fragment>
            <Grid>
                <GridElement s={6}>

                    <SelectBox
                        label="Type of work"
                        name="type"
                        value={inputs.type}
                        onChange={handleInputChange}>
                        <option value={10}>Musicale</option>
                        <option value={20}>Littéraire</option>
                        <option value={30}>Cinématographique</option>
                        <option value={40}>Autre</option>
                    </SelectBox>
                </GridElement>

                <GridElement s={6}>

                    <SelectBox
                        label="Nature of work"
                        name="nature"
                        value={inputs.nature}
                        onChange={handleInputChange}>
                        <option value={10}>Oeuvre</option>
                        <option value={20}>Expresssion</option>
                        <option value={30}>Exécution</option>
                    </SelectBox>
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Name of uniform title"
                        name="name"
                        value={inputs.name}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>

            {/* **********  Expression Of *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Expression Of &nbsp;
                        <RoundButton icon="add" size="30"
                        // onClick={e => DeleteAtIndex("MediumOfPerformance", 1)}
                        />
                    </h5>

                    {
                        inputs.expression_of.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.type_work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>est un abrégé</option>
                                        <option value={20}>est un arrangement</option>
                                        <option value={30}>est une révision de</option>
                                        <option value={40}>est une traduction de</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            {/* ********** Has for expression *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Has for expression &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.has_expression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            {/* ********** Other links *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Other links  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.other_links.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            {/* ********** Authors *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Authors  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.authors.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            {/* ********** Interpreters *************** */}
            <Grid>
                <GridElement s={12}>
                    <h5> Interpreters  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>

                    {
                        inputs.interpreters.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    }
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Form of work(Free hand)"
                        name="form_of_work_text"
                        value={inputs.form_of_work_text}
                        onChange={handleInputChange}
                    />
                </GridElement>
                <GridElement s={4}>
                    <TextBox label="Form of work"
                        name="Broader_term"
                        // value={inputs.Broader_term.Label}
                        // onChange={handleInputChange}
                        defaultValue="test form of work"

                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenBroader_term} />
                    <RoundButton icon="delete" size="30" onClick={unsetBroader_term} />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <DatePicker
                        label="Date of the work"
                        value={inputs.date_of_work && inputs.date_of_work.toISOString().split("T")[0] || ""}
                        onChange={(e) => {
                            e.persist();
                            HandlePropertyChange("date_of_work", new Date(e.target.value))
                        }}
                    />

                </GridElement>
                <GridElement s={6}>
                    <TextBox label="Original place of the work"
                        name="original_place_of_work"
                        value={inputs.original_place_of_work}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Subject of the work"
                        name="subject_of_work"
                        value={inputs.subject_of_work}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>

            <Grid>
                <GridElement s={6}>

                    <SelectBox
                        label="Targeted Completeness"
                        name="targeted_completeness"
                        value={inputs.targeted_completeness}
                        onChange={handleInputChange}>
                        <option value={0}>--------</option>
                        <option value={20}>Finished work</option>
                        <option value={30}>Infinit work</option>
                    </SelectBox>
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Target audience"
                        name="targeted_audience"
                        value={inputs.targeted_audience}
                        onChange={handleInputChange}

                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="History of the work"
                        name="history_of_work"
                        value={inputs.history_of_work}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>
            {/* <Grid>

                <GridElement s={12}>
                    <TextBox label="Context of the work"
                        name="context_of_work"
                        value={inputs.context_of_work}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid> */}
            <MultipleTextinputs
                Title="Medium of performance (for music)"
                ItemsList={inputs.medium_of_performance}
                onElementChange={
                    (newValue) => HandlePropertyChange("medium_of_performance", newValue)
                }
            />
            <MultipleTextinputs
                Title="Numeric designation (for music)"
                ItemsList={inputs.numeric_designation}
                onElementChange={
                    (newValue) => HandlePropertyChange("numeric_designation", newValue)
                }
            />
            {/* 
            <Grid>
                <h6> Form of Work  &nbsp;
                        <RoundButton icon="add" size="30"

                    />
                </h6>
                <GridElement s={6}>
                    <TextBox required
                        label="Form of work(Free hand)"
                        name="Name"
                        value={inputs.Name}
                        onChange={handleInputChange}
                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenBroader_term} />
                    <RoundButton icon="delete" size="30" onClick={unsetBroader_term} />
                </GridElement>
            </Grid> */}


            <Grid>

                <GridElement s={12}>
                    <TextBox label="Key(Saisie libre)"
                        name="key_text"
                        value={inputs.key_text}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <h5> Key  &nbsp;
                        <RoundButton icon="add" size="30"
                        //  onClick={handleOpenSee_Also} 
                        />
                    </h5>
                    {/* 

                    {
                        inputs.HasExpression.map((UniformTitle, index) => {
                            return <Grid key={index}>
                                <GridElement s={5}>
                                    <TextBox label="See also (related term)"
                                        defaultValue={UniformTitle.Name}
                                    />
                                </GridElement>
                                <GridElement s={3}>
                                    <SelectBox
                                        label="Expression type"
                                        // name="Type_Work"
                                        value={inputs.Type_Work}
                                        defaultValue={20}
                                    // onChange={handleInputChange}
                                    >
                                        <option value={10}>a un abrégé</option>
                                        <option value={20}>a un arrangement</option>
                                        <option value={30}>a une révision</option>
                                        <option value={40}>a une traduction</option>
                                    </SelectBox>
                                </GridElement>
                                <GridElement s={1} style={{ display: "flex", height: "84px" }}>
                                    <RoundButton icon="delete" size="30" onClick={e => console.log("removed expression of", e)
                                    } style={{ margin: "auto" }} />
                                </GridElement>
                            </Grid>
                        })
                    } */}
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Coordinate system (cartographic work)"
                        name="coordinate_system"
                        value={inputs.coordinate_system}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox required
                        label="Equinox (cartographic work)"
                        name="equinox"
                        value={inputs.equinox}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <MultipleTextinputs
                Title="Form subdivision"
                ItemsList={inputs.form_subdivision}
                onElementChange={
                    (newValue) => HandlePropertyChange("form_subdivision", newValue)
                } />

            <Grid>

                <GridElement s={12}>
                    <TextBox label="Other distinctive features"
                        name="other_features"
                        value={inputs.other_features}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="Comment"
                        name="comment"
                        value={inputs.comment}
                        onChange={handleInputChange}
                        Multiline
                    />
                </GridElement>
            </Grid>
            <Grid>

                <GridElement s={12}>
                    <TextBox label="URL of thumbnail"
                        name="url_thumbnail"
                        value={inputs.url_thumbnail}
                        onChange={handleInputChange}

                    />
                </GridElement>
            </Grid>

            <h5> Linked Auhorities
            &nbsp;
                <RoundButton icon="add" size="30" onClick={handleOpen} />
            </h5>

            <LinkedAuthorityListView
                Linked_authorities={inputs.linked_authorities}
                OnAuthorityLinkChange={OnAuthorityLinkChange} />
            <br />

            <Button variant="contained">Cancel</Button>
            <Button variant="contained"
                onClick={onSubmit}>Save</Button>

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority}
                AuthorityType={ModalAuthorityType === 0 ? undefined : ModalAuthorityType}
            />
        </React.Fragment >
    )
}
export default AddUniformTitleForm