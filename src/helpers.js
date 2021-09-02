const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length + 1);
  return items[idx];
};

const remove = (items, item) => {
  const idx = items.findIndex((e) => e === item);
  if (idx !== -1) {
    const removedItem = items[idx];
    items.splice(idx, 1);
    return removedItem;
  }
  return undefined;
};

export { choice, remove };
