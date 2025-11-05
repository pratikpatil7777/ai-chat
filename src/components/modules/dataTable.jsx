'use client';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

function DataTable({ columns, data, rowHeight = 56 }) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  });

  const columnCount = table.getVisibleFlatColumns().length || 1;
  const gridTemplate = `repeat(${columnCount}, minmax(0, 1fr))`;

  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 6
  });

  return (
    <div
      ref={parentRef}
      role="table"
      className="h-96 overflow-auto rounded-lg border border-slate-200 bg-white text-sm dark:border-slate-700 dark:bg-slate-950"
    >
      <div role="rowgroup" className="sticky top-0 z-10 grid bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400" style={{ gridTemplateColumns: gridTemplate }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div role="row" key={headerGroup.id} className="contents">
            {headerGroup.headers.map((header) => (
              <div role="columnheader" key={header.id} className="px-4 py-3 font-medium">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div role="rowgroup" style={{ height: `${virtualizer.getTotalSize()}px`, position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const row = table.getRowModel().rows[virtualRow.index];
          return (
            <div
              role="row"
              key={row.id}
              className="absolute inset-x-0 grid border-b border-slate-100 dark:border-slate-800" style={{ transform: `translateY(${virtualRow.start}px)`, gridTemplateColumns: gridTemplate }}
            >
              {row.getVisibleCells().map((cell) => (
                <div role="cell" key={cell.id} className="px-4 py-3 text-slate-700 dark:text-slate-200">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataTable;
