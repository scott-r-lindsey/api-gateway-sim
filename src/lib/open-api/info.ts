/**
 * Created by EGomez on 3/15/17.
 */

import PathMethod from './path/method';

export default class ConfigInfo {
    private _version: string;

    get version(): string {
        return this._version;
    }

    set version(value: string) {
        this._version = value;
    }

    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}
