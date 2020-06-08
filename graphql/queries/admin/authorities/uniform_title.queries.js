import gql from 'graphql-tag';

const GET_UNIFORM_TITLE = gql`
query(
$other_features: String
$expression_of: [ID]
$history_of_work: String
$targeted_audience: String
$form_subdivision: [String]
$form_of_work_text: String
$_id: ID
$original_place_of_work: String
$coordinate_system: String
$linked_authorities: [ID]
$url_thumbnail: String
$has_expression: [ID]
$date_of_work: DateTime
$numeric_designation: [String]
$key_id: ID
$subject_of_work: String
$key_text: String
$type: Int
$nature: Int
$comment: String
$equinox: String
$form_of_work_id: ID
$authors: [ID]
$name: String
$targeted_completeness: String
$medium_of_performance: [String]
$interpreters: [ID]
$other_links: [ID]


){
  uniform_title(UniformTitle:{
    other_features:$other_features,
expression_of:$expression_of,
history_of_work:$history_of_work,
targeted_audience:$targeted_audience,
form_subdivision:$form_subdivision,
form_of_work_text:$form_of_work_text,
_id:$_id,
original_place_of_work:$original_place_of_work,
coordinate_system:$coordinate_system,
linked_authorities:$linked_authorities,
url_thumbnail:$url_thumbnail,
has_expression:$has_expression,
date_of_work:$date_of_work,
numeric_designation:$numeric_designation,
key_id:$key_id,
subject_of_work:$subject_of_work,
key_text:$key_text,
type:$type,
nature:$nature,
comment:$comment,
equinox:$equinox,
form_of_work_id:$form_of_work_id,
authors:$authors,
name:$name,
targeted_completeness:$targeted_completeness,
medium_of_performance:$medium_of_performance,
interpreters:$interpreters,
other_links:$other_links,}){
  _id
type
nature
name
expression_of
has_expression
other_links
authors
interpreters
form_text_of_work
form_of_work_id
date_of_work
original_place_of_work
subject_of_work
targeted_completeness
targeted_audience
history_of_work
medium_of_performance
numeric_designation
key_text
key_id
coordinate_system
equinox
form_subdivision
other_features
Comment
url_thumbnail
linked_authorities

  }
}
`;


module.exports = {
  GET_UNIFORM_TITLE

}
