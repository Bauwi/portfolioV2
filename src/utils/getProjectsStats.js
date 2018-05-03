// concatenate stacks array of all projects into a single one
const reduceStacks = (projects, stack) => {
  return (
    projects.projects
      .reduce((acc, cur) => {
        return [...acc, ...cur[stack]];
      }, [])
      // clean up undefined values
      .filter(el => !!el)
  );
};

const compressArray = original => {
  let compressed = [];
  // make a copy of the input array
  const copy = original.slice(0);

  // first loop goes over every element
  for (let i = 0; i < original.length; i += 1) {
    let myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (let w = 0; w < copy.length; w += 1) {
      if (original[i] == copy[w]) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }

    if (myCount > 0) {
      let a = new Object();
      a.name = original[i];
      a.count = myCount;
      compressed.push(a);
    }
  }

  return compressed;
};

const orderByCount = statsArr => {
  return statsArr.sort((a, b) => b.count - a.count);
};

const getProjectsStats = projects => {
  // Arr with all occurences of a technology.
  const completeFrontStack = reduceStacks(projects, 'stackFront');
  // Arr ordered by count after compression.
  const compressedFrontStack = orderByCount(compressArray(completeFrontStack));

  const completeBackStack = reduceStacks(projects, 'stackBack');
  const compressedBackStack = orderByCount(compressArray(completeBackStack));

  return {
    stackFront: compressedFrontStack,
    stackBack: compressedBackStack,
    total: projects.projects.length,
  };
};

export default getProjectsStats;
