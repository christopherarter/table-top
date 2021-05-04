export interface DatabaseSeederInterface {
    up() : void | Promise<void>;
    down() : void | Promise<void>;
}