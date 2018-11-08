//do after UndoRedoSession
import {UndoRedo} from '../src/model/UndoRedo';
import {UndoRedoSession} from '../src/model/UndoRedoSession';

describe('#startSession', () => {
    it('should return undoRedoSession', () => {
        let u = new UndoRedo();
        expect(u.startSession() instanceof UndoRedoSession).toBe(true);
    });

    it('should inSession be true here after', () => {
        let u = new UndoRedo();

        expect(u.inSession()).toBe(false);
        u.startSession();
        expect(u.inSession()).toBe(true);
    });

    it('should throw if starting twice', () => {
        let u = new UndoRedo();

        u.startSession();

        try {
            u.startSession();
            fail('it should have failed');
        }
        catch(err) { }
    });
});

describe('#saveSession', () => {
    it('should inSession be false', () => {
        let u = new UndoRedo();
        u.startSession();

        expect(u.inSession()).toBe(true);
        u.saveSession();
        expect(u.inSession()).toBe(false);
    });

    it('should be able to start session again', () => {
        let u = new UndoRedo();

        u.startSession();
        u.saveSession();
        u.startSession();

        expect(u.inSession()).toBe(true);
    })

    it('should throw if not inSession', () => {
        let u = new UndoRedo();

        expect(u.inSession()).toBe(false);

        try {
            u.saveSession();
            fail('it should have failed');
        }
        catch(err) { }
    })
})

describe('#getSession', () => {
    it('should be null if not in session', () => {
        let u = new UndoRedo();
        
        expect(u.inSession()).toBe(false);
        expect(u.getSession() === null).toBe(true);
    })

    it('should not be null if in session', () => {
        let u = new UndoRedo();
        u.startSession();

        expect(u.inSession()).toBe(true);
        expect(u.getSession() instanceof UndoRedoSession).toBe(true);
    })
})

describe('#undo', () => {
    it('should throw if in session', () => {
        let u = new UndoRedo();
        u.startSession();

        try {
            u.undo();
            fail('it should have failed');
        }
        catch(err) { }
    })

    it('should return false if nothing to undo', () => {
        let u = new UndoRedo();

        expect(u.undo()).toBe(false);
    })

    it('should return true if undone', () => {
        let u = new UndoRedo(),
            stub = {revert: function() { return this; }};

        u.startSession()
            .add(stub);
        u.saveSession();

        expect(u.undo()).toBe(true);
    });

    it('should have nothing to undo if undone too many times', () => {
        let u = new UndoRedo(),
            stub = {revert: function() { return this; }};

        u.startSession()
            .add(stub);
        u.saveSession();

        expect(u.undo()).toBe(true);
        expect(u.undo()).toBe(false);
    })

    it ('should be undone in opposite order than when added', () => {
        let x,
          stub1 = {revert: function() { x = 0; return this; }},
          stub2 = {revert: function() { x = 1; return this; }},
          u = new UndoRedo();

        let s = u.startSession();
        s.add(stub1);
        u.saveSession();
        
        s = u.startSession();
        s.add(stub2);
        u.saveSession();

        u.undo();
        expect(x).toBe(1);
        u.undo();
        expect(x).toBe(0);
    });
})

describe('#redo', () => {
    it('should throw if in session', () => {
        let u = new UndoRedo();
        u.startSession();

        try {
            u.redo();
            fail('it should have failed');
        }
        catch(err) { }
    })

    it('should return false if nothing in redo', () => {
        let u = new UndoRedo();

        expect(u.redo()).toBe(false);
    })

    it('should be able to redo only after undo', () => {
        let u = new UndoRedo(),
            stub = {revert: function() { return this; }};
        
        u.startSession()
            .add(stub);
        u.saveSession();

        expect(u.redo()).toBe(false);
        u.undo();
        expect(u.redo()).toBe(true);    
    })

    it ('should redo in same order as when added', () => {
        let x,
          stub1 = {revert: function() { x = 0; return this; }},
          stub2 = {revert: function() { x = 1; return this; }},
          u = new UndoRedo();

        u.startSession()
            .add(stub1);
        u.saveSession();
        
        u.startSession()
            .add(stub2);
        u.saveSession();

        u.undo();
        u.undo();

        u.redo();
        expect(x).toBe(0);
        u.redo();
        expect(x).toBe(1);
    })
})

describe('#clearUndoCache', () => {

})

describe('#clearRedoCache', () => {
    
})