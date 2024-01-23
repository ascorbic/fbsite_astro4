interface TabBarProps<T> {
  items: T[];
  selectedItem: T;
  onTabClick: (item: T, selectedIndex: number) => void
}

export function TabBar<T extends { id: number, name: string}>(props: TabBarProps<T>) {
  const { items, selectedItem, onTabClick} = props;
  return (
    <>
      <div className="flex gap-x-3">
        {
          items.map((item, index) => {
            const activeCls = item.id === selectedItem.id ? 'bg-slate-500 ' : ' bg-slate-200';
            return <div
                key={item.id}
                className={'text-black py-2 px-4 rounded ' + activeCls}
                onClick={() => onTabClick(item, index)}
              >
                {item.name}
              </div>
            }
          )
        }
      </div>
    </>
  )
}

