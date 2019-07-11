class navItem {
    constructor(label) {
      this.label = label;
    }

    function applyBase() {
        let urls = ["html", "pdf", "sub"];
        alert(window.location)
    }

    static function makeNavItem(obj) {
        if (!obj.label) {
            return null;
        }
        let newObj = new navItem(obj.label);
        obj.keys.forEach( k => {
            newObj = obj.k;
        });
        return newObj;
    }

}
