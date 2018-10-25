interface Activatable {
    ActivateSelf: () => number;
}
abstract class AbstractBase implements Activatable{
    private _myName: string;
    public get Name() { return this._myName; }
    constructor (name: string) {
        this._myName = name;
    }
    abstract ActivateSelf(): number;
}
class ArmyBase extends AbstractBase {
    private _totalSolders: number;
    public get TotalSolders() { return this._totalSolders; }
    constructor(name: string, totalSolders: number) {
        super(name);
        this._totalSolders = totalSolders;
    }
    public ActivateSelf() {
        return this.TotalSolders;
    }
}
class NavyBase extends AbstractBase {
    private _totalShips: number;
    public get TotalShips() { return this._totalShips; }
    constructor(name: string, totalShips: number) {
        super(name);
        this._totalShips = totalShips;
    }
    public ActivateSelf() {
        return this.TotalShips;
    }
}
const armyBase = new ArmyBase("First army base", 100);
const navyBase = new NavyBase("First navy base", 3);
const anotherArmyBase: Activatable = new ArmyBase("Second army base", 250);

console.log(armyBase.Name + " " + armyBase.ActivateSelf());
console.log(navyBase.Name + " " + navyBase.ActivateSelf());
console.log(anotherArmyBase.ActivateSelf());