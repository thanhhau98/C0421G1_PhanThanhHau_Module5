import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutuberPlaylistComponent } from './youtuber-playlist.component';

describe('YoutuberPlaylistComponent', () => {
  let component: YoutuberPlaylistComponent;
  let fixture: ComponentFixture<YoutuberPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutuberPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutuberPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
