type JsonKey = string | number;

type JsonValue = string | number | boolean | null | undefined;

type JsonArray = JsonValue[] | JSON[];

export type JSON = {
    [key in JsonKey]: JSON | JsonValue | JsonArray;
}