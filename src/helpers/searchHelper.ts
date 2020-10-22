const searchHelper = (search: string, categoryText: string, children: Object) => {
  if (categoryText.toLocaleLowerCase().includes(search.toLowerCase())) {
    return true;
  }

  const childrenKeys = Object.keys(children);
  let childPasses = false;
  childrenKeys.forEach((key) => {
    if (searchHelper(search, key, children[key])) {
      childPasses = true;
    }
  });
  return childPasses;
};

export default searchHelper;
