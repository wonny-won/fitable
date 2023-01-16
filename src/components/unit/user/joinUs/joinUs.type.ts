export interface JoinUsPresenter {
    router: (path: string) => () => void
}