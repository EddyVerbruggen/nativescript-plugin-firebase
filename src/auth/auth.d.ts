export declare namespace auth {
  export function addAuthStateListener(
    nextOrObserver:
      | import('firebase').Observer<any>
      | ((a: import('firebase').User | null) => any),
    error?: ((a: import('firebase').auth.Error) => any),
  );

  export function removeAuthStateListener(listener: any);
}