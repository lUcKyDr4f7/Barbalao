import { AllProducts } from './AllProducts'
function getProductsBySection(sectionId) {
  return AllProducts.filter(product => {
    const sections = product.sectionId.split('/').map(Number);
    return sections.includes(sectionId);
  });
}
export const Products1 = getProductsBySection(2);