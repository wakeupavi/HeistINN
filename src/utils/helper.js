


 export function filteredRes(searchText, restaurant) {
    const filterRest = restaurant.filter((rest) => {
      return rest?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    return filterRest;
  }
  