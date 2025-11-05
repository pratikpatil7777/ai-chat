'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils/cn';

function ChatUploadZone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/x-parquet': ['.parquet']
    }
  });

  return (
    <section>
      <div
        {...getRootProps({
          className: cn(
            'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500 transition hover:border-brand-400 dark:border-slate-700 dark:bg-slate-900/70',
            isDragActive && 'border-brand-500 text-brand-500'
          )
        })}
      >
        <input {...getInputProps()} />
        <p>Drop CSV or Parquet attachments to augment your query.</p>
        <p className="text-xs text-slate-400">Files are processed transiently and never stored.</p>
      </div>
      {files.length > 0 && (
        <ul className="mt-3 space-y-2 text-xs text-slate-500">
          {files.map((file) => (
            <li key={file.path || file.name}>
              {file.name} – {(file.size / 1024).toFixed(1)} KB
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ChatUploadZone;
