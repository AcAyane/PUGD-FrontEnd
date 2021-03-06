import React from 'react'; 
import { GET_CATEGORY_ALL_FIELDS } from '@/graphql/queries/admin/authorities/category.queries';
import { useLazyQuery } from '@apollo/react-hooks';
import AuthorityHeader from '@/components/admin/authorities/shared/authorityHeader';
import SearchCategoryComponent from '@/components/admin/authorities/category/SearchCategoryComponent';
import ListCategoryComponent from '@/components/admin/authorities/category/ListCategoryComponent';
import Card from '@/components/ui/Card/Card'; 

const CategoryPage = () => {

    const [getCategoryAllFields, CategoryResponse] = useLazyQuery(GET_CATEGORY_ALL_FIELDS);

    return (
        <div className="animate fadeLeft">
            <AuthorityHeader Authority="Catégories" />
            <Card  >
                <SearchCategoryComponent getCategoryAllFields={getCategoryAllFields} />
            </Card>

            <Card  > 
                    <h4 className="card-title">Recherche : Category</h4>
                    {CategoryResponse.error ? <div color="danger">{String(CategoryResponse.error.message)}</div> : null}
                    {CategoryResponse.data &&
                        <ListCategoryComponent categories={CategoryResponse.data.category_all_fields} />
                    } 
            </Card>
        </div>
    );
}; 

import AdminLayout from '@/components/adminLayout';
CategoryPage.Layout = AdminLayout
export default CategoryPage; 
 