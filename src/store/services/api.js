import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'platformApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json');
      return headers;
    }
  }),
  tagTypes: ['Auth', 'Chat', 'Module', 'Subscription', 'Notification'],
  endpoints: (builder) => ({
    getSession: builder.query({
      query: () => '/auth/session',
      providesTags: ['Auth']
    }),
    getModules: builder.query({
      query: () => '/modules',
      providesTags: ['Module']
    }),
    getNotifications: builder.query({
      query: () => '/notifications',
      providesTags: ['Notification']
    })
  })
});

export const { useGetSessionQuery, useGetModulesQuery, useGetNotificationsQuery } = api;
