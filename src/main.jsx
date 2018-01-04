(function() {
    'use strict';

    var ItemGrid = function(props) {
        return (
            <div className='item-grid'>
                {grid_numbers().map(r => (
                    <div className='row'>
                        {r.map(n => (
                            <div className={'cell icon item-'+n}>
                                {n === 3 && <div className='select'/>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    function grid_numbers() { 
        // apply converts from sparse to dense array
        const source = Array.apply(null, Array(20)).map((_,n) => n)
        const result = [];
        while (source.length) result.push(source.splice(0,5));
        return result;
    }

    var ItemMenu = function(props) {
        return (
            <div className='item-menu'>
                <div className='item-menu-title'/>
                <ItemGrid/>
            </div>
        );
    };

    var TargetPanel = function(props) {
        return (
            <div className='target-panel row'>
                <div className='item-frame cell'><div className={'icon item-'+props.start}/></div>
                <div className='icon target cell'/>
                <div className='item-frame cell'><div className={'icon item-'+props.end}/></div>
            </div>
        );
    };

    var App = function(props) {
        return [
            <ItemMenu/>,
            <TargetPanel start={3} end={11}/>
        ];
    };

    window.start = function() {
        ReactDOM.render(<App/>, document.getElementById('app'));
    };
}());
