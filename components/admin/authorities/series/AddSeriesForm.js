import React from 'react';

import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import Button from '@/components/ui/Button';

import SimpleModal from '../shared/SearchAuthor'
import LinkedAuthorityListView from '../shared/LinkedAuthorityListView';
import useSeriesForm from './useSeriesForm';
import TextBox from '@/components/ui/TextBox';

const AddSeriesForm = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault()
        onAddHandler(
            inputs.Title,
            inputs.Issn,
            inputs.Publisher.id,
            inputs.Website,
            inputs.Comment,
            inputs.URL_thumbnail,
            inputs.Linked_authorities)
    }
    const {
        inputs,
        open,
        handleInputChange,
        ModalAuthorityType,
        HandleChosenAuthority,
        handleClose,
        OnAuthorityLinkChange,
        handleOpen,
        handleOpenPublisher,
        unsetPublisher,
        onAddHandler } = useSeriesForm();

    return (
        <React.Fragment>

            <Grid>
                <GridElement s={6}>
                    <TextBox required label="Title"
                        name="Title"
                        value={inputs.Title}
                        onChange={handleInputChange}
                    />
                </GridElement>
                <GridElement s={6}>
                    <TextBox required label="ISSN"
                        name="Issn"
                        value={inputs.Issn}
                        onChange={handleInputChange}
                    />
                </GridElement>

            </Grid>
            <Grid>
                <GridElement s={5}>
                    <TextBox label="Publisher"
                        name="Publisher"
                        value={inputs.Publisher.Label}
                        onChange={handleInputChange}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </GridElement>
                <GridElement s={2} style={{ display: "flex", height: "84px" }}>
                    <RoundButton icon="add" size="30" onClick={handleOpenPublisher} />
                    <RoundButton icon="delete" size="30" onClick={unsetPublisher} />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox label="Website"
                        name="Website"
                        value={inputs.Website}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={6}>
                    <TextBox label="Comment"
                        name="Comment"
                        value={inputs.Comment}
                        onChange={handleInputChange}
                        multiline
                        rows="4"
                    />
                </GridElement>
            </Grid>
            <Grid>
                <GridElement s={12}>
                    <TextBox label="URL of thumbnail"
                        name="URL_thumbnail"
                        value={inputs.URL_thumbnail}
                        onChange={handleInputChange}
                    />
                </GridElement>
            </Grid>

            <h5> Linked Auhorities
            &nbsp;
                <RoundButton icon="add" size="30" onClick={handleOpen} />
            </h5>
            <LinkedAuthorityListView
                Linked_authorities={inputs.Linked_authorities}
                OnAuthorityLinkChange={OnAuthorityLinkChange} />
            <br />

            <Button variant="contained">
                Cancel
            </Button>
            <Button variant="contained"
                onClick={onSubmitHandler}>
                Save
            </Button>

            <SimpleModal
                open={open}
                handleClose={handleClose}
                addAuthor={HandleChosenAuthority}
                AuthorityType={ModalAuthorityType === 0 ? undefined : ModalAuthorityType}
            />
        </React.Fragment>
    )
}
export default AddSeriesForm